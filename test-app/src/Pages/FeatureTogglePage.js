import React from 'react';
import "../PageStyling/FeatureTogglePage.css"

class FeatureTogglePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
    
        this.handleClick = this.handleClick.bind(this);
      }
    
      handleClick() {
        this.setState(state => ({
          isToggleOn: !state.isToggleOn
        }));
      }
    
      render() {
        return (
            <div>
                <h1 class={this.state.isToggleOn? "FeatureToggleBackgroundDay" : "FeatureToggleBackgroundNight"}>Feature Toggles Page</h1>
                <button onClick={this.handleClick}
                        class={this.state.isToggleOn? "FeatureToggleBackgroundBtnDay" : "FeatureToggleBackgroundBtnNight"}>
                    {this.state.isToggleOn ? 'Day Mode' : 'Night Mode'}
                </button>

            </div>
            
        );
      }
}

export default FeatureTogglePage;