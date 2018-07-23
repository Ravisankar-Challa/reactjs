import React from 'react';
import { expect } from 'chai';
import { shallow, render, mount } from 'enzyme';
import sinon from 'sinon';

import Main from '../src/Main';
import Box from '../src/components/Box';

describe('<Main /> ', () => {
	it('renders three <Box /> components - shallow rendering', () => {
		const wrapper = shallow(<Main />);
		//console.log(wrapper.debug());
		//console.log(wrapper.html());
		//expect(wrapper.find('p')).to.have.length(2);
		expect(wrapper.find(Box)).to.have.length(3);
	});
	
	it('renders three <Box /> components - render', () => {
		const wrapper = render(<Main />);
		//console.log(wrapper.html());
		expect(wrapper.find('p')).to.have.length(2);
		//expect(wrapper.find(Box)).to.have.length(3);
	});
	
	it('renders three <Box /> components - full dom rendering', () => {
		const onButtonClick = sinon.spy();
		const wrapper = mount(<Main />);
		expect(wrapper.find('p').at(0).text()).to.equal('Hello World !!!');
		wrapper.find('button').at(0).simulate('click');
		expect(wrapper.find('p').at(0).text()).to.equal('Ravisankar Reddy Challa');
	});
});