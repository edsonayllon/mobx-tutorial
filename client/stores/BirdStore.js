import { observable, computed, action } from "mobx";

class BirdStore {
  @observable birds = [];

  @action addBird = (bird) => {
    this.birds.push(bird);
  }

  @computed get birdCount () {
    return this.birds.length;
  }
}

const store = new BirdStore();
export default store;
