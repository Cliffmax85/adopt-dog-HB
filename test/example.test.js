// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderDogCard, renderDogDetail } from '../render-utils.js';

const test = QUnit.test;

test('create a dog and return the correct responses using renderDogCard', (expect) => {
    //Arrange
    // Set up your arguments and expectations

    const expected = '<a href="./detail/?id=3"><div class="dog-card"><p>jeff</p><img src="./assets/dog.jpeg"></div></a>';
    
    const dog = {
        name:'jeff',
        id: 3,
        breed: 'dog'


    };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderDogCard(dog);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);



});

test('create a dog and return the correct responses using renderDogDetail', (expect) => {
    //Arrange
    // Set up your arguments and expectations

    const expected = '<div class="dog-detail"><p class="name">JoeBob</p><img src="../assets/smort-boi.jpeg"><div class="age-and-breed"><p class="age">undefined years old</p><p class="breed">smort-boi</p></div><p class="description">fake-dog</p></div>';
    
    const dog = {
        name:'JoeBob',
        id: 2,
        description: 'fake-dog',
        breed: 'smort-boi'
    };

    const actual = renderDogDetail(dog);
    
    //Act 
    // Call the function you're testing and set the result to a const


    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);



});
