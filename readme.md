[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# persian-numbers-input

> simple persian input that convert persian numbers to english numbers seperate them 3 by 3 and you can customize with tailwind using className and inline style and you can use it with react-hook-form and ant-design
> [![NPM](https://img.shields.io/npm/v/persian-numbers-input.svg)](https://www.npmjs.com/package/persian-numbers-input)

## Prerequisites

This project requires NodeJS (version 12 or later) and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.

```sh
$ npm -v && node -v
6.4.1
v8.16.0
```

## Table of contents

- [Project Name](#project-name)
  - [Prerequisites](#prerequisites)
  - [props](#props)
  - [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Contributing](#contributing)
  - [Built With](#built-with)
  - [Authors](#authors)

## Installation

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)

To install and set up the library, run:

```sh
$ npm install --save-dev persian-numbers-input
```

Or if you prefer using Yarn:

```sh
$ yarn add --dev persian-numbers-input
```

## Usage

```tsx
import { PersianNumericFormat } from 'persian-numbers-input';
const App: React.Fc = () => {
  return (
    <div>
      <PersianNumericFormat />
    </div>
  );
};

export default App;
```

## Props

| Type        | Default value             | Description           |
| ----------- | ------------------------- | --------------------- |
| value       | String                    | the input value       |
| ------      | -------------             | --------------------  |
| onChange    | (event) => void           | the input onchange    |
| ------      | -------------             | --------------------  |
| placeholder | string                    | the input placeholder |
| ------      | -------------             | --------------------  |
| className   | string                    | the input className   |
| ------      | -------------             | --------------------  |
| prefix      | string                    | the input prefix      |
| ------      | -------------             | --------------------  |
| postfix     | string                    | the input postfix     |
| ------      | -------------             | --------------------  |
| formatter   | (value: string) => string | the input formatter   |
| ------      | -------------             | --------------------  |
| styles      | {}                        | the input styles      |

## Contributing

for contributing please contact me in [telegram] : https://t.me/hashemianm

## Authors

- **seyyed mohammad javad hashemian** - _front end developer_ - [SeyyedMohammadJavadHashemian](https://github.com/mjhashemian)
