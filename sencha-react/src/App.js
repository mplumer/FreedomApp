import React from 'react';

import { SenchaGrid, Column, EmailColumn, BooleanColumn } from '@sencha-grid'
import "@sencha/sencha-grid/dist/themes/grui.css"

export default class App extends React.Component {
  render() {

    const data = [
      { name: 'Lisa', department: 'HR', email: 'lisa@freedom.com', active: true },
      { name: 'Bart', department: 'Finance', email: 'bart@freedom.com', active: false },
      { name: 'Max', department: 'IT', email: 'max@freedom.com', active: true },
      { name: 'Robert', department: 'Design', email: 'robert@freedom.com', active: false }
    ]

    return (
      <SenchaGrid
        data={data}
        style={{
          height: '100vh',
          width: '100vw'
        }}
        title="Sencha Grid"
        plugins={{
          gridexporter: true
        }}
      >
        <Column text="Name" dataIndex="name" flex={1} />
        <Column text="Title" dataIndex="title" flex={1} />
        <EmailColumn text="Email" dataIndex="email" flex={1} />
        <BooleanColumn text="Active" dataIndex="active" flex={1} />
      </SenchaGrid>
    );
  }
}
