import MenuItem from '../menu-item/menuItem'
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



// const mapStateToProps = (state)=>({
//   sections:state.directory.sections
// })
const mapStateToProps = createStructuredSelector({
  sections:selectDirectorySections
})
export default connect(mapStateToProps)(Directory);
