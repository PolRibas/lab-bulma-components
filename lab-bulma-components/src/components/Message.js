import React, { Component } from 'react'

class Message extends Component {
    render(props) {

        const csss = {
            isActive: 'is-active',
            isBlack: 'is-black',
            isCentered: 'is-centered',
            isDanger: 'is-danger',
            isDark: 'is-dark',
            isFocused: 'is-focused',
            isGrouped: 'is-grouped',
            isHovered: 'is-hovered',
            isInfo: 'is-info',
            isInverted: 'is-inverted',
            isLarge: 'is-large',
            isLight: 'is-light',
            isLink: 'is-link',
            isLoading: 'is-loading',
            isMedium: 'is-medium',
            isOutlined: 'is-outlined',
            isPrimary: 'is-primary',
            isRight: 'is-right',
            isRounded: 'is-rounded',
            isSelected: 'is-selected',
            isSmall: 'is-small',
            isStatic: 'is-static',
            isSuccess: 'is-success',
            isText: 'is-text',
            isWarning: 'is-warning',
            isWhite: 'is-white',
          }
        const { title, children, ...pepito} = this.props
        let styla = '';
        for (const prop in pepito) {  
            styla += csss[prop] + ' ';
        }

        return (
            <article className={`message ${styla}`}>
            <div className="message-header">
              <p>{this.props.title}</p>
              <button className="delete" aria-label="delete"></button>
            </div>
            <div className="message-body">
            {this.props.children}
            </div>
          </article>
        )
    }
}

export default Message;
