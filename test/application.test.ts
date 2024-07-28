import { GetAccount } from "../src/application/GetAccount";
import { Signup } from "../src/application/Signup";
import { AccountDAOMemory } from "../src/resource/AccountDAO";
import { MailerGatewayMemory } from "../src/resource/MailerGateway";

let signup: Signup;
let getAccount: GetAccount;

beforeEach(async () => {
        const accountDAO = new AccountDAOMemory()
        const mailerGateway = new MailerGatewayMemory()
        signup = new Signup(accountDAO, mailerGateway)
        getAccount = new GetAccount(accountDAO)
})

test("Deve criar uma conta de passageiro", async function () {
        const input = {
                name: "John Doe",
                email: `john.doe${Math.random()}@gmail.com`,
                cpf: "87748248800",
                isPassenger: true
        };
        const outputSignup = await signup.execute(input)
        expect(outputSignup.accountId).toBeDefined()
        const outputGetAccount = await getAccount.execute({ accountId: outputSignup.accountId })
        expect(outputGetAccount.account_id).toBe(outputSignup.accountId)
        expect(outputGetAccount.name).toBe(input.name)
        expect(outputGetAccount.email).toBe(input.email)
        expect(outputGetAccount.cpf).toBe(input.cpf)
        expect(outputGetAccount.is_passenger).toBe(input.isPassenger)
})

test("Deve criar uma conta de motorista", async function () {
        const input = {
                name: "John Doe",
                email: `john.doe${Math.random()}@gmail.com`,
                cpf: "87748248800",
                isDriver: true,
                carPlate: "AAA99999"
        };

        const outputSignup = await signup.execute(input)
        expect(outputSignup.accountId).toBeDefined()
        const outputGetAccount = await getAccount.execute({ accountId: outputSignup.accountId })
        expect(outputGetAccount.account_id).toBe(outputSignup.accountId)
        expect(outputGetAccount.name).toBe(input.name)
        expect(outputGetAccount.email).toBe(input.email)
        expect(outputGetAccount.cpf).toBe(input.cpf)
        expect(outputGetAccount.is_driver).toBe(input.isDriver)
        expect(outputGetAccount.car_plate).toBe(input.carPlate)
})

test("Não deve criar uma conta de passageiro se o nome for inválido", async function () {
        const input = {
                name: "John",
                email: `john.doe${Math.random()}@gmail.com`,
                cpf: "87748248800",
                isPassenger: true
        };
        await expect(() => signup.execute(input)).rejects.toThrow(
                new Error("Invalid name")
        )

})
test("Não deve criar uma conta de passageiro se o email for inválido", async function () {
        const input = {
                name: "John Doe",
                email: `john.doe${Math.random()}`,
                cpf: "87748248800",
                isPassenger: true
        };
        await expect(() => signup.execute(input)).rejects.toThrow(
                new Error("Invalid email")
        )
})
test("Não deve criar uma conta de passageiro se o cpf for inválido", async function () {
        const input = {
                name: "John Doe",
                email: `john.doe${Math.random()}@gmail.com`,
                cpf: "1230",
                isPassenger: true
        };

        await expect(() => signup.execute(input)).rejects.toThrow(
                new Error("Invalid cpf")
        )
})
test("Não deve criar uma conta de passageiro se a conta já existe", async function () {
        const input = {
                name: "John Doe",
                email: `john.doe${Math.random()}@gmail.com`,
                cpf: "87748248800",
                isPassenger: true
        };
        await signup.execute(input)
        await expect(() => signup.execute(input)).rejects.toThrow(
                new Error("Account already exists")
        )
})
test("Não deve criar uma conta de motorista se placa for inválida", async function () {
        const input = {
                name: "John Doe",
                email: `john.doe${Math.random()}@gmail.com`,
                cpf: "87748248800",
                isDriver: true,
                carPlate: "123"
        };

        await expect(() => signup.execute(input)).rejects.toThrow(
                new Error("Invalid car plate")
        )
})
