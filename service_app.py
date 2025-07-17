import argparse
import json
import os
from typing import List, Dict

def load_services(path: str) -> List[Dict[str, str]]:
    if os.path.exists(path):
        with open(path, 'r', encoding='utf-8') as f:
            try:
                return json.load(f)
            except json.JSONDecodeError:
                return []
    return []


def save_services(path: str, services: List[Dict[str, str]]) -> None:
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(services, f, ensure_ascii=False, indent=2)


def add_service(path: str, name: str, description: str) -> None:
    services = load_services(path)
    service_id = len(services) + 1
    services.append({'id': service_id, 'name': name, 'description': description})
    save_services(path, services)
    print(f"Serviço '{name}' cadastrado com ID {service_id}.")


def list_services(path: str) -> None:
    services = load_services(path)
    if not services:
        print('Nenhum serviço cadastrado.')
        return
    for svc in services:
        print(f"[{svc['id']}] {svc['name']}: {svc['description']}")


def main() -> None:
    parser = argparse.ArgumentParser(description='Aplicação de cadastro de serviços')
    subparsers = parser.add_subparsers(dest='command')

    parser_add = subparsers.add_parser('add', help='Adicionar um novo serviço')
    parser_add.add_argument('--name', required=True, help='Nome do serviço')
    parser_add.add_argument('--description', required=True, help='Descrição do serviço')

    parser_list = subparsers.add_parser('list', help='Listar serviços cadastrados')

    args = parser.parse_args()
    data_path = 'services.json'

    if args.command == 'add':
        add_service(data_path, args.name, args.description)
    elif args.command == 'list':
        list_services(data_path)
    else:
        parser.print_help()

if __name__ == '__main__':
    main()
