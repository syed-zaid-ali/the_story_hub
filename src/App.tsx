/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SplitPortal } from './components/SplitPortal';
import { TopBar } from './components/TopBar';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FFFDF7] text-[#2D2640] flex flex-col">
      <TopBar />
      <div className="flex-1">
        <SplitPortal />
      </div>
    </div>
  );
}
