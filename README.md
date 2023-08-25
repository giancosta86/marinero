# marinero

_TypeScript utilities for the browser_

![GitHub CI](https://github.com/giancosta86/marinero/actions/workflows/publish-to-npm.yml/badge.svg)
[![npm version](https://badge.fury.io/js/@giancosta86%2Fmarinero.svg)](https://badge.fury.io/js/@giancosta86%2Fmarinero)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](/LICENSE)

![Overview](./docs/diagrams/overview.png)

**marinero** provides TypeScript utilities for vanilla UI within the browser.

## Installation

The package on NPM is:

> @giancosta86/marinero

The public API entirely resides in the root package index, so you shouldn't reference specific modules.

## Usage

The `Download` namespace includes:

- `fromDataUrl()` - given a [data URL](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs), automatically triggers a download in the browser with the suggested file name

- `objectAsJson()` - given _any object_, converts it to a JSON string downloaded as a text file with the suggested file name
