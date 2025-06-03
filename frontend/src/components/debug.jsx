// DebugConsole.jsx
import React, { useEffect, useState } from 'react';

const DebugConsole = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const appendLog = (type, args) => {
      setLogs(prevLogs => [
        ...prevLogs,
        { type, message: args.map(arg => typeof arg === 'object' ? JSON.stringify(arg) : String(arg)).join(' ') }
      ]);
    };

    const originalLog = console.log;
    const originalError = console.error;
    const originalWarn = console.warn;

    console.log = (...args) => {
      appendLog('log', args);
      originalLog(...args);
    };

    console.error = (...args) => {
      appendLog('error', args);
      originalError(...args);
    };

    console.warn = (...args) => {
      appendLog('warn', args);
      originalWarn(...args);
    };

    return () => {
      console.log = originalLog;
      console.error = originalError;
      console.warn = originalWarn;
    };
  }, []);

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      maxHeight: '40%',
      overflowY: 'auto',
      backgroundColor: 'black',
      color: 'lime',
      fontSize: '12px',
      zIndex: 9999,
      padding: '4px'
    }}>
      {logs.map((log, i) => (
        <div key={i} style={{ color: log.type === 'error' ? 'red' : log.type === 'warn' ? 'yellow' : 'lime' }}>
          [{log.type.toUpperCase()}] {log.message}
        </div>
      ))}
    </div>
  );
};

export default DebugConsole;
