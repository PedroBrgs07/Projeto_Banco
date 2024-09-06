<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Transacao;

class TransacaoController extends Controller
{
    public function index()
    {
        $transacoes = Transacao::all();
        return response()->json($transacoes);
    }

    public function store(Request $request)
    {
        $request->validate([
            'amount' => 'required|numeric',
            'type' => 'required|in:revenue,expense',
            'description' => 'required|string|max:255',
        ]);

        $transacao = Transacao::create([
            'amount' => $request->amount,
            'type' => $request->type,
            'description' => $request->description,
        ]);

        return response()->json($transacao, 201);
    }

    public function show($id)
    {
        $transacao = Transacao::find($id);

        if (!$transacao) {
            return response()->json(['message' => 'Transação não encontrada'], 404);
        }

        return response()->json($transacao);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'amount' => 'nullable|numeric',
            'type' => 'nullable|in:revenue,expense',
            'description' => 'nullable|string|max:255',
        ]);

        $transacao = Transacao::find($id);

        if (!$transacao) {
            return response()->json(['message' => 'Transação não encontrada'], 404);
        }

        $transacao->update($request->only(['amount', 'type', 'description']));

        return response()->json($transacao);
    }

    public function destroy($id)
    {
        $transacao = Transacao::find($id);

        if (!$transacao) {
            return response()->json(['message' => 'Transação não encontrada'], 404);
        }

        $transacao->delete();

        return response()->json(['message' => 'Transação excluída com sucesso']);
    }
}
