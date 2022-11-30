import { CurrencyAmount } from 'components/common'

import * as S from './MoneyFlowStats.styled'

import IncomeIcon from 'public/icons/income.svg'
import OutcomeIcon from 'public/icons/outcome.svg'
import CashIcon from 'public/icons/cash.svg'
import DownloadIcon from 'public/icons/download.svg'
import PlusIcon from 'public/icons/plus.svg'
import TrashIcon from 'public/icons/trash.svg'

export const MoneyFlowStats = () => {
	return (
		<S.MoneyFlowStats>
			<S.Stats>
				<S.StatItem>
					<IncomeIcon />
					<CurrencyAmount value={500000} />
				</S.StatItem>

				<S.Divider />

				<S.StatItem>
					<OutcomeIcon />
					<CurrencyAmount value={50000} />
				</S.StatItem>

				<S.Divider />

				<S.StatItem>
					<CashIcon />
					<CurrencyAmount value={450000} />
				</S.StatItem>
			</S.Stats>

			<S.Actions>
				<S.ActionButton>
					<TrashIcon />
				</S.ActionButton>

				<S.ActionButton>
					<DownloadIcon width={24} height={24} viewBox="0 0 17 17" />
				</S.ActionButton>

				<S.ActionButton>
					<PlusIcon width={24} height={24} viewBox="0 0 17 17" />
				</S.ActionButton>
			</S.Actions>
		</S.MoneyFlowStats>
	)
}
