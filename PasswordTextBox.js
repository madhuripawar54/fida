import React from 'react';
import { Item, Input, Icon, Label } from 'native-base';

class PasswordTextBox extends React.Component {
    state = {
        icon: "eye-off",
        password: true
    };

    _changeIcon() {
        this.setState(prevState => ({
            icon: prevState.icon === 'eye' ? 'eye-off' : 'eye',
            password: !prevState.password
        }));
    }

    render() {
        const { label, icon, onChange } = this.props;
        return (
            <Item floatingLabel  style={{marginTop:10}}>
                 <Icon active name='lock' />
                <Label>{this.props.name}</Label>
                <Input secureTextEntry={this.state.password} />
                <Icon name={this.state.icon} onPress={() => this._changeIcon()} />
            </Item>
        );
    }
}

export default PasswordTextBox;