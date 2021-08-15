# Audius-Tip

we implement a service that allows musicians and fans to communicate more closely. Musicians can issue their own tokens based on ERC-20 and fans can purchase them. Fans can purchase premium music or goods from musicians with this token, and the higher the scarcity, the higher the price of the token, due to the higher the musician's value or the small amount of tokens issued. This token provides Uniswap with liquidity to make it available for purchase and sale immediately.

Through the Audius protocol, the tracking track and musician information were taken, and the Uniswap protocol was integrated into a smart contract. The contract was distributed on the Goeri TestNet using Hardhat. The UI was implemented as React and linked to the contract with the ether library.

In addition to buy token, supportTip, finalize, and withdrawETH were implemented in TokenProvider.sol, but due to lack of time, they have not yet been implemented in ui. It is planning to link its contract on its profile page.

Ethereum, Hardhat, Solidity, Audius, Uniswap, React, Ether

## contracts
- Goeri
ManagerFactory : 0x0dc9bfB05997E89f06d6C680764f8c46A4EbA0dc

UniV2Router: 0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D
UniV2Factory : 0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f

TokenFactory : 0xc6F2d5f7B8E35280B04d2eD74B7350C1D7806b07
TokenProvider: 0x54A5a5D4fbb265ec6873cCB65f755c0a0C3883c7

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
