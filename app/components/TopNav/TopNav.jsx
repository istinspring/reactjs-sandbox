import React from 'react';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import FontIcon from 'material-ui/lib/font-icon';

/*
   Fixed navbar component.
 */
class TopNav extends React.Component {
  render() {
    return (
      <Tabs>
        <Tab
            icon={<FontIcon className="material-icons">poll</FontIcon>}
            label="TAB1"
        />
        <Tab
            icon={<FontIcon className="material-icons">favorite</FontIcon>}
            label="TAB2"
        />
        <Tab
            icon={<FontIcon className="material-icons">person_pin</FontIcon>}
            label="TAB3"
        />
      </Tabs>
    );
  }
}

export default TopNav;
