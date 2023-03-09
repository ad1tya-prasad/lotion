import { Outlet, useParams } from "react-router-dom";
import React, { useState } from 'react';
import Title from './Title';
import TabBar from './TabBar';

function Layout() {
  const { noteNumber } = useParams();
  const [tabsVisible, setTabsVisible] = useState(true);
  const [noteNumberState, setNoteNumberState] = useState(noteNumber);

  return (
      <>
        <Title tabsVisible={tabsVisible} setTabsVisible={setTabsVisible}/>
        <main>
          <TabBar tabsVisible={tabsVisible} noteNumberState={noteNumberState} setNoteNumberState={setNoteNumberState}/>
          <Outlet context={[setNoteNumberState]}/>
        </main>
      </> 
  );
}

export default Layout;