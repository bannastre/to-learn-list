const mongoose = require('mongoose')
const Browser = require('zombie');
const chai = require('chai'),
  assert = chai.assert,
  expect = chai.expect;
var app = require('../app');
const List = mongoose.model('List')
const Item = mongoose.model('Item')

Browser.localhost('localhost', 7777);

describe('Item creation page', () => {
  const browser = new Browser();

  before((done) => {
    browser.visit('/')
    console.log(browser.location.href);
    browser.visit('/lists/new', done)
  });

  before((done) => {
    browser
      .fill('name', 'Reading List')
      .pressButton('Create', done);
  });

  after((done) =>  {
    mongoose.connection.collections.items.drop(() => {
      done();
    });
  });

  describe('User sees a form on the new items page', () => {

    it('should get the new list page', () => {
      browser.assert.text('button', 'Add Item');
    });

    it('should display the items form', () => {
      browser.assert.element('form');
    });

    it('should have an input field for new items', () => {
      browser.assert.element('form input[name=text]');
      browser.assert.element('form button');
    });
  });

  describe('User can create a new Item', () => {

    before((done) => {
      browser
        .fill('text', 'First Item')
        .pressButton('Add Item', done);
    });

    it('should display the items form', () => {
      browser.assert.element('form');
      browser.assert.element('form input[name=text]');
      browser.assert.element('form button');
    });

    it('should display the item on the list', () => {
      browser.assert.text('h2', 'First Item');
    });
  });

  describe('User can only see items associated with that list', () => {

    before((done) => {
      const seedList = new List({name: 'Seed List'}).save()
      const seedItem = new Item({text: 'Seed text', list: seedList._id}).save()
      done();
    });

    before((done) => {
      browser.visit('/lists/new', done)
    });

    before((done) => {
      browser
        .fill('name', 'Reading List 2')
        .pressButton('Create', done);
    });

    it('should display the item on the list', () => {
      expect(browser.assert.text('h2', 'Seed text')).to.not.be
    });
  });

});
