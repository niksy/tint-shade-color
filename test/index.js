import assert from 'assert';
import { tint, shade } from '../index';

before(function() {
	window.fixture.load('/test/fixtures/index.html');
});

after(function() {
	window.fixture.cleanup();
});

it('should tint color', function() {
	assert.equal(tint('#6ecaa6', 0.4), '#a8dfca');
	assert.equal(tint('#f00', 0.4), '#ff6666');
	assert.throws(function() {
		tint('#foo', 0.4);
	}, TypeError);
});

it('should shade color', function() {
	assert.equal(shade('#ffbb52', 0.6), '#664b21');
	assert.equal(shade('#f00', 0.6), '#660000');
	assert.throws(function() {
		shade('#foo', 0.6);
	}, TypeError);
});
