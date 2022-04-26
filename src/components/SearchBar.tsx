import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './SearchBar.css';

interface SearchBarDefaultProps {
  inputPlaceholder: string;
}


export interface SearchBarProps extends SearchBarDefaultProps {
  onSearchSumbit: (t: string) => void;
}

export interface SearchBarState {
  inputValue: string;
  hasFocus: boolean;
}

export default class SearchBar extends React.Component<
  SearchBarProps,
  SearchBarState
> {
  static defaultProps: SearchBarDefaultProps = {
    inputPlaceholder: 'Please input a query',
  };

  constructor(props: SearchBarProps) {
    super(props);

    this.state = {
      inputValue: '',
      hasFocus: false,
    };
  }

  handleOnInput: React.FormEventHandler<HTMLInputElement> = (event) => {
    this.setState({
      inputValue: event.currentTarget.value,
    });
  };

  handleOnFocus: React.FormEventHandler<HTMLInputElement> = (event) => {
    event.currentTarget.setSelectionRange(0, event.currentTarget.value.length);

    this.setState({
      hasFocus: true,
    });
  };

  handleOnBlur: React.FormEventHandler<HTMLInputElement> = (event) => {
    this.setState({
      hasFocus: false,
    });
  };

  handleOnSumbit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    this.props.onSearchSumbit(this.state.inputValue);
  };

  render() {
    return (
      <form
        className="center search-bar"
        onSubmit={this.handleOnSumbit}
        {...(this.state.hasFocus && { 'has-focus': 'true' })}>
        <div className="center input-icon">
          <input
            value={this.state.inputValue}
            placeholder={this.props.inputPlaceholder}
            onInput={this.handleOnInput}
            onFocus={this.handleOnFocus}
            onBlur={this.handleOnBlur}
            type="text"
            className="search-bar__input"
          />
        </div>
        <button className="search-bar__button text-center" type="submit">
          <SearchIcon  />
        </button>
      </form>
    );
  }
}
