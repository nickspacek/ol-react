import React from 'react';
import ol from 'openlayers';
import OLComponent from '../ol-component';

export default class Circle extends OLComponent {
  constructor(props) {
    super(props);
    this.geometry = new ol.geom.Circle();
    this.updateFromProps(props);
  }

  updateFromProps(props) {
    this.geometry.setCoordinates([this.props.children]);
  }

  componentDidMount() {
    this.context.feature.setGeometry(this.geometry);
  }

  componentWillReceiveProps(newProps) {
    this.updateFromProps(newProps);
  }

  render() {
    return false;
  }
}

Circle.propTypes = {
  center: React.PropTypes.arrayOf(React.PropTypes.number).isRequired,
  radius: React.PropTypes.number
}

Circle.contextTypes = {
  feature: React.PropTypes.instanceOf(ol.Feature)
}
