import React, { Component } from 'react'

class CoolButton extends Component {
    render() {
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
        const {className, children, type, ...pepito} = this.props
        let styla = '';
        for (const prop in pepito) {  
            styla += csss[prop] + ' ';
        }

        return (
            <button className={`button ${styla} ${className || ''}`} type={`${type || ''}`}>{children}</button>
        )
    }
    // takeClassName(props) {
    //     const csss = {
    //         isActive: 'is-active',
    //         isBlack: 'is-black',
    //         isCentered: 'is-centered',
    //         isDanger: 'is-danger',
    //         isDark: 'is-dark',
    //         isFocused: 'is-focused',
    //         isGrouped: 'is-grouped',
    //         isHovered: 'is-hovered',
    //         isInfo: 'is-info',
    //         isInverted: 'is-inverted',
    //         isLarge: 'is-large',
    //         isLight: 'is-light',
    //         isLink: 'is-link',
    //         isLoading: 'is-loading',
    //         isMedium: 'is-medium',
    //         isOutlined: 'is-outlined',
    //         isPrimary: 'is-primary',
    //         isRight: 'is-right',
    //         isRounded: 'is-rounded',
    //         isSelected: 'is-selected',
    //         isSmall: 'is-small',
    //         isStatic: 'is-static',
    //         isSuccess: 'is-success',
    //         isText: 'is-text',
    //         isWarning: 'is-warning',
    //         isWhite: 'is-white',
    //       }
    //     let styla = '';
    //     for (const prop in props) {    
    //             styla += csss[prop] + ' '
    //     }
    //     return styla
    // }

}



export default CoolButton;