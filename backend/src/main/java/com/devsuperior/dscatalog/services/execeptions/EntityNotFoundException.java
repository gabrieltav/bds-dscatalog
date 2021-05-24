package com.devsuperior.dscatalog.services.execeptions;

public class EntityNotFoundException extends RuntimeException {
	private static final long serialVersionUID = 1L;
	
	public EntityNotFoundException(String msg) {
		super(msg);
	}
}
