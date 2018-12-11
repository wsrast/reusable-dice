import React, {Fragment} from 'react';
import {Grid} from '@material-ui/core';

const Layout = ({Saved, Create}) => (
	<Fragment>
		<Grid item xs={12}>
			<h3>Saved Rolls:</h3>
			<Saved />
		</Grid>
		<Grid item xs={12} sm={6} lg={4}>
			<h3>Create Dice Rolls:</h3>
			<Create />
		</Grid>
	</Fragment>
);

export default Layout;
