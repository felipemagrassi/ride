import { validate } from "./validateCpf"
import { AccountDAO } from "../resource/AccountDAO"
import { MailerGateway } from "../resource/MailerGateway"

export class Signup {
        constructor(readonly accountDAO: AccountDAO, readonly mailerGateway: MailerGateway) {
        }

        async execute(input: any): Promise<any> {
                const account = input
                const id = crypto.randomUUID()
                const existingAccount = await this.accountDAO.getAccountByEmail(account.email)
                account.accountId = id

                if (existingAccount) throw new Error("Account already exists");
                if (!account.name.match(/[a-zA-Z] [a-zA-Z]+/)) throw new Error("Invalid name");
                if (!account.email.match(/^(.+)@(.+)$/)) throw new Error("Invalid email");
                if (!validate(account.cpf)) throw new Error("Invalid cpf");
                if (account.isDriver && account.carPlate && !account.carPlate.match(/[A-Z]{3}[0-9]{4}/)) throw new Error("Invalid car plate");

                await this.accountDAO.saveAccount(account)
                await this.mailerGateway.send(account.email, 'Welcome!', "Hello World")

                return { accountId: id }

        }
}
