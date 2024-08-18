import { Controller,Post,Body } from '@nestjs/common';


@Controller('loans')
export class LoansController {
    @Post()
    createLoan(@Body() createLoanDto: any) {
      return `Loan created for ${createLoanDto.userId}`;

}

}