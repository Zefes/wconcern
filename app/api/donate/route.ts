import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const data = await req.json();
<<<<<<< HEAD
  const { phone, amount } = data;
=======
  const { name, email, phone, amount } = data;
>>>>>>> f85e012c202c72b1bf533f737166d8666c638c26

  // Validação simples
  if (!phone || !amount) {
    return NextResponse.json({ message: 'Dados inválidos.' }, { status: 400 });
  }

  // 🔐 Aqui você integraria com a API da M-Pesa
  console.log(`Simulando doação de ${amount} MZN para o número ${phone}`);

  // Exemplo de resposta simulada
  return NextResponse.json({ message: `Solicitação de pagamento enviada para ${phone}` });
}
