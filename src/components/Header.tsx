import React from 'react';
import SearchBar from './SearchBar';
import './Header.css';

export interface HeaderProps {
  onSearchSumbit: (t: string) => void;
}

export default class VideoDetails extends React.Component<HeaderProps> {
  render() {
    return (
      <div className="text-center p4 header">
        <SearchBar onSearchSumbit={this.props.onSearchSumbit} />
      </div>
    );
  }
}
