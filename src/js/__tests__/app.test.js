import { getHealthStatus } from "../app";

describe('getHealthStatus', () => {
    test('возвращает "healthy", если здоровье больше 50', () => {
        expect(getHealthStatus({ name: 'Маг', health: 90 })).toBe('healthy');
        expect(getHealthStatus({ name: 'Воин', health: 51 })).toBe('healthy');
    })

    test('возвращает "wounded", если здоровье от 25 до 50 включительно', () => {
        expect(getHealthStatus({ name: 'Вор', health: 35 })).toBe('wounded');
        expect(getHealthStatus({ name: 'Лучник', health: 25 })).toBe('wounded');
        expect(getHealthStatus({ name: 'Маг', health: 50 })).toBe('wounded');
    })

    test('возвращает "critical", если здоровье меньше 25', () => {
        expect(getHealthStatus({ name: 'Маг', health: 24 })).toBe('critical');
        expect(getHealthStatus({ name: 'Лучник', health: 0 })).toBe('critical');
    })
})