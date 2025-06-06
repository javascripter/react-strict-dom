/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  plugins: {
    'postcss-react-strict-dom': {
      include: ['src/**/*.{js,jsx,mjs,ts,tsx}'],
      useLayers: true
    },
    autoprefixer: {}
  }
};
