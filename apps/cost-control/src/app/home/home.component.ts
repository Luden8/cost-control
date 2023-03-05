import { Component } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { v4 as uuidv4 } from 'uuid'

type Transaction = {
	id?: string | null
	title?: string | null
	description?: string | null
	date?: string | null
	amount?: number | null
}
@Component({
	selector: 'cost-control-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
})
export class HomeComponent {
	public transactions: Transaction[] = []
	public newTransactionTitle = ''
	public newTransactionDescription = ''
	public newTransactionDate = ''
	public newTransactionAmount = 0
	public form = this.fb.group({
		id: [null],
		title: [
			'',
			Validators.compose([
				Validators.required,
				Validators.min(5),
				Validators.max(25),
			]),
		],
		description: '',
		date: ['', Validators.required],
		amount: [0, Validators.required],
	})

	public addTransaction(): void {
		this.form.markAllAsTouched()
		if (this.form.valid) {
			this.transactions.push({ ...this.form.value, id: uuidv4() })
		}
	}

	removeTransaction(id: string): void {
		this.transactions = this.transactions.filter(
			(transaction) => transaction.id !== id
		)
	}

	constructor(private fb: FormBuilder) {}
}
