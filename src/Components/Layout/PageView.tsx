import classNames from 'classnames'
import React, { ReactNode } from 'react'

const PageView = (props: {
    header: ReactNode,
    children: ReactNode,
    className?: string
}) => {
    return (
        <div className={classNames("page", props.className)}>
            <h2 className="page-title">{props.header}</h2>
            <div className="page-content">
                {props.children}
            </div>
        </div>
    )
}

export default PageView
