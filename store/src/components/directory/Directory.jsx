import MenuItem from '../menu-item/menuItem'
import React, { Component } from 'react';
import './Directory.scss'
import { connect } from 'react-redux';
import { selectDirectorySections } from './directorySelectors';
import { createStructuredSelector } from 'reselect';

const Directory = ({sections}) => {
   
        return (
            <div className="directory-menu">
                {
                    sections.map(({id,...otherSectionProps}) => (
                        <MenuItem key={id} {...otherSectionProps}  />
                    ))
                }
            </div>
        );
    
}



const mapStateToProps = createStructuredSelector({
  sections:selectDirectorySections
})
export default connect(mapStateToProps)(Directory);
