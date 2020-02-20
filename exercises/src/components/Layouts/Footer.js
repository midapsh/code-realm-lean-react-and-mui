import React from 'react';

import {
  Paper, Tabs, Tab
} from "@material-ui/core";

export default function Footer({ muscles }) {
  return (
    <Paper >
      <Tabs
        value={0}
        // onChange={() => ()}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="ALL" />
        {muscles.map(muscle =>
          <Tab
            key={muscle}
            label={muscle}
          />
        )}
      </Tabs>
    </Paper>
  );
}
