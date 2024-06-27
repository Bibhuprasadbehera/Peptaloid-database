//smilesstructureviewer.js
// still doesnt work
// find a way to fix it
// i will do it in the server side implementation and will upadate the views.py for thiss

import React, { useState, useEffect, useRef } from 'react';
import SmilesDrawer from 'smiles-drawer';
import Button from '../assets/Button';
import InputField from '../assets/InputField';
import Alert from '../assets/Alert';

const SmilesStructureViewer = () => {
  const [smiles, setSmiles] = useState('');
  const [error, setError] = useState('');
  const canvasRef = useRef(null);
  const smilesDrawerRef = useRef(null);

  useEffect(() => {
    // Initialize SmilesDrawer
    const options = {
      width: 500,
      height: 500,
    };
    smilesDrawerRef.current = new SmilesDrawer.Drawer(options);
    console.log('SmilesDrawer initialized:', smilesDrawerRef.current);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!smiles) {
      setError('Please enter a SMILES string');
      return;
    }

    console.log('Parsing SMILES:', smiles);

    try {
      SmilesDrawer.parse(smiles, (tree) => {
        console.log('Parse successful, tree:', tree);
        if (canvasRef.current && smilesDrawerRef.current) {
          smilesDrawerRef.current.draw(tree, canvasRef.current, 'light', false);
          console.log('Drawing complete');
        } else {
          console.error('Canvas or SmilesDrawer not available');
        }
      }, (err) => {
        console.error('Parse error:', err);
        setError('Error parsing SMILES: ' + err);
      });
    } catch (err) {
      console.error('Unexpected error:', err);
      setError('Unexpected error: ' + err.message);
    }
  };

  const handleDownload = (size) => {
    if (!smiles) {
      setError('Please generate a structure first');
      return;
    }

    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = size;
    tempCanvas.height = size;

    const tempDrawer = new SmilesDrawer.Drawer({ width: size, height: size });

    SmilesDrawer.parse(smiles, (tree) => {
      tempDrawer.draw(tree, tempCanvas, 'light', false);
      const link = document.createElement('a');
      link.download = `structure_${size}x${size}.png`;
      link.href = tempCanvas.toDataURL('image/png');
      link.click();
    }, (err) => {
      setError('Error during download: ' + err);
    });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>SMILES Structure Viewer</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: '16px' }}>
        <InputField
          type="text"
          value={smiles}
          onChange={(e) => setSmiles(e.target.value)}
          placeholder="Enter SMILES string"
        />
        <Button
          color="#4CAF50"
          size="16px"
          action={handleSubmit}
          text="Generate Structure"
        />
      </form>
      {error && <Alert message={error} />}
      <canvas ref={canvasRef} style={{ border: '1px solid #ccc', marginTop: '16px' }} width="500" height="500" />
      <div style={{ marginTop: '16px' }}>
        <Button color="#008CBA" size="14px" action={() => handleDownload(100)} text="Download 100x100" />
        <Button color="#008CBA" size="14px" action={() => handleDownload(500)} text="Download 500x500" />
        <Button color="#008CBA" size="14px" action={() => handleDownload(800)} text="Download 800x800" />
      </div>
    </div>
  );
};

export default SmilesStructureViewer;
