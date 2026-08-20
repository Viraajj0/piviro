import React from 'react';
import { createRoot } from 'react-dom/client';
import { Agentation } from 'agentation';

const agentationContainer = document.createElement('div');
agentationContainer.id = 'agentation-root';
document.body.appendChild(agentationContainer);

const root = createRoot(agentationContainer);
root.render(<Agentation />);
