import 'babel-polyfill'
import rainDrop from '../src/RainDrops.js'
const chai = require('chai')
 
const expect = chai.expect; 

//Passed test cases
describe('Test for valid input', () => {
	it('rainDrop(3)', () => {
	expect(rainDrop(3)).to.be.equal("Pling")
	});


	it('rainDrop(5)', ()=> {
	expect(rainDrop(5)).to.be.equal("Plang")
	});

	it('rainDrop(7)', ()=> {
	expect(rainDrop(7)).to.be.equal("Plong")
	});

	it('rainDrop(15)', () => {
	expect(rainDrop(15)).to.be.equal("PlingPlang")
	});

	it('rainDrop(105)', () => {
	expect(rainDrop(105)).to.be.equal("PlingPlangPlong")
	});
	it('rainDrop(34)', () =>{
	expect(rainDrop(34)).to.be.equal(34)
	});
})

describe('Test for invalid input', () =>{

	it('rainDrop({})', () =>{
	expect(rainDrop({})).to.be.equal("Input must be a number")
	});

	it('rainDrop("hello")', () =>{
	expect(rainDrop("hello")).to.be.equal("Input must be a number")
	});
	
	it('rainDrop()', () => {
	expect(rainDrop()).to.be.equal("Please enter a value")
	});


})	/*it(rainDrop(-13), (){
	expect( (){ parser.parse(raw); } ).toThrow(new Error("Please Enter a Positive number"))
	});
})*/


//Test for failed test cases
describe('Test for valid input', () => {

	it('rainDrop([])', () => {
	expect(rainDrop([])).to.be.equal("Input must be a number")
	});

	it('rainDrop(-3)', () => {
	expect(rainDrop(-3)).to.be.equal("Please Enter a Positive number")
	});

})