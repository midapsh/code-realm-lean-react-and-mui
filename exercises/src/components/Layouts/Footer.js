import React from 'react';

import {
  Paper, Tabs, Tab
} from "@material-ui/core";

export default function Footer({ muscles, category, onSelect }) {
  const index = category
    ? muscles.findIndex(group => group === category) + 1
    : 0;

  async function handleIndexSelect(event, index) {
    onSelect(index === 0 ? "" : muscles[index - 1]);
  }

  return (
    <Paper >
      <Tabs
        value={index}
        onChange={handleIndexSelect}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab key="ALL" label="ALL" />
        {muscles.map(group =>
          <Tab
            key={group}
            label={group}
          />
        )}
      </Tabs>
    </Paper>
  );
}
