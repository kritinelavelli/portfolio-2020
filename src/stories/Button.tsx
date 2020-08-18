import React from 'react';
import './button.css';

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundcolor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export class Button extends React.Component<ButtonProps> {

  render() {
    const mode = this.props.primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    return (
      <button
        type="button"
        className={['storybook-button', `storybook-button--${this.props.size}`, mode].join(' ')}
        style={{backgroundColor: this.props.backgroundcolor }}
        {...this.props}
      >
        {this.props.label}
      </button>
    );
  }
}
