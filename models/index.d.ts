import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerTodo = {
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
}

type LazyTodo = {
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
}

export declare type Todo = LazyLoading extends LazyLoadingDisabled ? EagerTodo : LazyTodo

export declare const Todo: (new (init: ModelInit<Todo>) => Todo) & {
  copyOf(source: Todo, mutator: (draft: MutableModel<Todo>) => MutableModel<Todo> | void): Todo;
}

type EagerContact = {
  readonly id: string;
  readonly name: string;
  readonly phone: string;
  readonly email?: string | null;
}

type LazyContact = {
  readonly id: string;
  readonly name: string;
  readonly phone: string;
  readonly email?: string | null;
}

export declare type Contact = LazyLoading extends LazyLoadingDisabled ? EagerContact : LazyContact

export declare const Contact: (new (init: ModelInit<Contact>) => Contact) & {
  copyOf(source: Contact, mutator: (draft: MutableModel<Contact>) => MutableModel<Contact> | void): Contact;
}