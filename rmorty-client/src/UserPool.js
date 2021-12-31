import { CognitoUserPool} from "amazon-cognito-identity-js"


const poolData = {
    UserPoolId: "us-east-2_zRdei708c",
    ClientId: "29dao01dsq5f9bsjhsm6ohrq8"
}

export default new CognitoUserPool(poolData)