export class User {
  id: number;
  name: string;
  gender: string;
  ageGroup: string;
  userCode: string;
  reqs: {
      fruitReqs: number,
      vegReqs: number,
      proteinReqs: number,
      grainReqs: number
  };
  reqsStatus: {
      fruitMet: boolean,
      vegMet: boolean,
      proteinMet: boolean,
      grainMet: boolean
  };
  registered: boolean;
  email: string;

  constructor(id: number, name: string, gender: string, ageGroup: string, userCode: string, reqs: any, reqsStatus: any, registered: boolean, email: string) {
      this.id = id;
      this.name = name;
      this.gender = gender;
      this.ageGroup = ageGroup;
      this.userCode = userCode;
      this.reqs = reqs;
      this.reqsStatus = reqsStatus;
      this.registered = registered;
      this.email = email;
  }
}
