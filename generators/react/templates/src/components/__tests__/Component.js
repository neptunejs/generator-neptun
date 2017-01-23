import React from 'react';
import renderer from 'react-test-renderer';

import Component from '../Component';

test('Component renders', () => {
    const component = renderer.create(
        <Component />
    );
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
});
