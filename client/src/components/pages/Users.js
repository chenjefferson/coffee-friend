import React, { Component, Fragment, useState } from 'react';

export default function Users() {
  const users = [
    {
      name: 'jim',
    },
    {
      name: 'alan',
    },
    {
      name: 'misty',
    },
  ];
  return (
    <Fragment>
      <h2>Currently Online</h2>
      <ul>
        {users.map((user) => (
          <li>{user.name}</li>
        ))}
      </ul>
    </Fragment>
  );
}
