import React from 'react'
import If from './if'

export default props => (
    <If test={!props.hide}>
        <button className={'btn btn-' + props.style} value='Clicar'
            onClick={props.onClick}>
            <i className={'fa fa-' + props.icon} />
        </button>
    </If>

)