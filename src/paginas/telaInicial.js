import React, { useState, useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import {
  ChevronRight,
  Zap,
  Shield,
  Clock,
  Smartphone,
  CreditCard,
  Users,
  Award,
  Star,
  ArrowRight,
} from "lucide-react-native";

export default function TelaInicial() {
  const [beneficioIndex, setBeneficioIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [animacaoNum, setAnimacaoNum] = useState({
    transactions: 0,
    users: 0,
    savings: 0,
  });
  const intervaloRef = useRef(null);

  const beneficios = [
    {
      icon: <Zap size={24} color="#000" />,
      title: "Transferências Instantâneas",
      description: "Envie e receba dinheiro em segundos, 24 horas por dia, 7 dias por semana",
      color: "from-yellow-400 to-orange-500",
    },
  ];

  const caracteristicas = [
    { icon: <Smartphone size={24} color="#000" />, title: "Aplicativo Intuitivo", desc: "Interface simples e moderna" },
  ];

  const estatisticas = [
    { label: "Transações/mês", value: 50, suffix: "M+" },
  ];

  useEffect(() => {
    setIsVisible(true);

    intervaloRef.current = setInterval(() => {
      setBeneficioIndex((prev) => (prev + 1) % beneficios.length);
    }, 4000);

    // Função de limpeza para o intervalo
    return () => clearInterval(intervaloRef.current);
  }, []); // Array de dependências vazio para rodar apenas uma vez

  useEffect(() => {
    const duracao = 2000;
    const segundos = 60;
    const intervalo = duracao / segundos;
    let segundo = 0;

    const tempo = setInterval(() => {
      segundo++;
      const progresso = segundo / segundos;
      const easyProgresso = 1 - Math.pow(1 - progresso, 3);

      setAnimacaoNum({
        transactions: Math.floor(50 * easyProgresso),
        users: Math.floor(15 * easyProgresso),
        savings: Math.floor(230 * easyProgresso),
      });

      if (segundo >= segundos) clearInterval(tempo);
    }, intervalo);

    // Função de limpeza para o intervalo da animação
    return () => clearInterval(tempo);
  }, []); // Array de dependências vazio para rodar apenas uma vez

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo!</Text>

      {/* Exibir Benefício Atual */}
      <View style={styles.beneficioContainer}>
        {beneficios[beneficioIndex].icon}
        <Text style={styles.beneficioTitle}>{beneficios[beneficioIndex].title}</Text>
        <Text style={styles.beneficioDescription}>{beneficios[beneficioIndex].description}</Text>
      </View>

      {/* Exibir Características */}
      <View style={styles.caracteristicasContainer}>
        {caracteristicas.map((item, index) => (
          <View key={index} style={styles.caracteristicaItem}>
            {item.icon}
            <Text style={styles.caracteristicaTitle}>{item.title}</Text>
            <Text style={styles.caracteristicaDesc}>{item.desc}</Text>
          </View>
        ))}
      </View>

      {/* Exibir Estatísticas */}
      <View style={styles.estatisticasContainer}>
        {estatisticas.map((item, index) => (
          <View key={index} style={styles.estatisticaItem}>
            <Text style={styles.estatisticaLabel}>{item.label}</Text>
            <Text style={styles.estatisticaValue}>
              {animacaoNum.transactions}
              {item.suffix}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  beneficioContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  beneficioTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  beneficioDescription: {
    fontSize: 14,
    textAlign: "center",
  },
  caracteristicasContainer: {
    marginBottom: 20,
  },
  caracteristicaItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  caracteristicaTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
  caracteristicaDesc: {
    fontSize: 14,
    marginLeft: 10,
  },
  estatisticasContainer: {
    marginBottom: 20,
  },
  estatisticaItem: {
    alignItems: "center",
  },
  estatisticaLabel: {
    fontSize: 14,
    color: "#666",
  },
  estatisticaValue: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
