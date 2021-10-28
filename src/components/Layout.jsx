import { Fragment } from 'react';
import NavHeader from 'components/nav/header/NavHeader';
import Footer from 'components/stationary/Footer';

export default function Layout({ children }) {
	return (
		<Fragment>
			<NavHeader />
			<main>{children}</main>
			<Footer />
		</Fragment>
	);
}
