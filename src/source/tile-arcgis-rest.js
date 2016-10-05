import React from 'react'
import ol from 'openlayers'
import OLComponent from '../ol-component'
import * as interaction from '../interaction'

export default class TileArcGISRest extends OLComponent {
  constructor(props) {
    super(props)
    this.source = new ol.source.TileArcGISRest(Object.assign({}, this.props))
  }

  getChildContext() {
    return {
      source: this.source
    }
  }

  componentDidMount() {
    this.context.layer.setSource(this.source)
  }

  componentWillUnmount() {}
}

TileArcGISRest.propTypes = {
  url: React.PropTypes.string.isRequired
}

TileArcGISRest.defaultProps = {
}

TileArcGISRest.contextTypes = {
  layer: React.PropTypes.instanceOf(ol.layer.Base),
  map: React.PropTypes.instanceOf(ol.Map)
}

TileArcGISRest.childContextTypes = {
  source: React.PropTypes.instanceOf(ol.source.Source)
}
