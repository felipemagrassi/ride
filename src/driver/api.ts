import express, { Request, Response } from 'express'
import { Signup } from '../application/Signup'
import { GetAccount } from '../application/GetAccount'
import { AccountDAODatabase } from '../resource/AccountDAO'
import { MailerGatewayMemory } from '../resource/MailerGateway'

const app = express()

app.use(express.json())

app.post('/signup', signupHandler)
app.get("/accounts/:accountId", getAccountHandler)

async function signupHandler(request: Request, response: Response) {
        try {
                const accountDAO = new AccountDAODatabase()
                const mailerGateway = new MailerGatewayMemory()
                const signup = new Signup(accountDAO, mailerGateway)
                const result = await signup.execute(request.body)
                response.json({ accountId: result.accountId })
        } catch (error: any) {
                response.status(422).json({
                        message: error.message
                })
        }
}

async function getAccountHandler(request: Request, response: Response) {
        const accountDAO = new AccountDAODatabase()
        const getAccount = new GetAccount(accountDAO)
        const input = {
                accountId: request.params.accountId
        }
        const account = await getAccount.execute(input)
        return response.json(account)

}

app.listen(3000)
