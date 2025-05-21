import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const data = await req.json();
  const { name, email, phone, amount } = data;

  // Validação simples
  if (!phone || !amount) {
    return NextResponse.json({ message: 'Dados inválidos.' }, { status: 400 });
  }

  // 🔐 Aqui você integraria com a API da M-Pesa
  console.log(`Simulando doação de ${amount} MZN para o número ${phone}`);

  // Exemplo de resposta simulada
  return NextResponse.json({ message: `Solicitação de pagamento enviada para ${phone}` });
}
