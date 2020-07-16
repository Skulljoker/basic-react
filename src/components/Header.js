import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export default class Header extends Component {
    render() {
        return (
            <div>
                <Link to="/"> Home </Link> |
                <Link to="/about"> เกี่ยวกับเรา </Link> |
                <Link to="/contact"> ติดต่อเรา </Link> |
                <Link to="/profile"> ข้อมูลส่วนตัว </Link> |
            </div>
        )
    }
}
